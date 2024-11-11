import { render } from '@testing-library/angular';
import userEvent from '@testing-library/user-event';
import { AppComponent } from 'src/app/app.component';

const setup = async () => {
  const user = userEvent.setup();

  jest.spyOn(console, 'info').mockImplementation(() => undefined);

  const tester = await render(AppComponent, {});

  return {
    ...tester,
    user,
  };
};

it('should render the title', async () => {
  const { queryByText } = await setup();

  const title = queryByText('weather-app');

  expect(title).toBeInTheDocument();
  expect(title).toBeVisible();
});

it('should initially display "Please enter a city or town to see the weather"', async () => {
  const { queryByText } = await setup();

  const text = queryByText('Please enter a city or town to see the weather');

  expect(text).toBeInTheDocument();
  expect(text).toBeVisible();
});

it('should initially display a input with a placeholder of "Enter a Location" and should display a button', async () => {
  const { findByTestId, getAllByRole } = await setup();

  const input = await findByTestId('city-input');
  expect(input).toBeDefined();

  expect(input).toHaveAttribute("placeholder", "Enter a location")

  const buttons = getAllByRole('button');
  expect(buttons.length).toBeGreaterThan(0);
});

it.skip('should display a list of weather cards, after the data has loaded', async () => {
  const { findByTestId, getAllByRole, queryByText, queryAllByTestId, user } = await setup();

  const input = await findByTestId('city-input');

  const buttons = getAllByRole('button');
  const buttonToClick = Math.trunc(Math.random() * buttons.length);
  const button = buttons[buttonToClick];

  userEvent.type(input, 'oxford');
  await user.click(button);

  expect(queryByText('...waiting for you to select a hero...')).not.toBeInTheDocument();

  // FindBy "WAITS" for cards to appear
  await findByTestId('list-data');

  const cards = queryAllByTestId('card')
  expect(cards.length).toEqual(5);

  // should have the right things on a card
});

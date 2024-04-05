import {render} from '@testing-library/react';
import App from './App';

test("check if app render without crashing", () => {
    const {getByTestId} = render(<App />);
});

test("App renders a div with the class App-header",() => {
    const appHeaderTest = getByClassName(App-header);
    
    expect(appHeaderTest).toBeInTheDocument()
})
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from '../src/components/Button';
import '@testing-library/jest-dom';

describe('Button Component', () => {
    test('renders with the correct text', () => {
        render(<Button>Test Button</Button>);
        expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    test('applies the correct variant class for danger', () => {
        const { container } = render(<Button variant="danger">Danger Button</Button>);
        expect(container.firstChild).toHaveClass('btn-danger');
    });

    test('applies the correct size class for large buttons', () => {
        const { container } = render(<Button size="large">Large Button</Button>);
        expect(container.firstChild).toHaveClass('btn-lg');
    });

    test('renders an icon when provided', () => {
        const TestIcon = () => <svg data-testid="test-icon" />;
        render(<Button icon={<TestIcon />}>Button with Icon</Button>);
        expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    test('shows loading state and disables the button', () => {
        const { container } = render(<Button isLoading>Loading Button</Button>);
        expect(screen.getByLabelText('loading')).toBeInTheDocument();
        expect(container.firstChild).toBeDisabled();
    });
});

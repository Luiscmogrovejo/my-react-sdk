import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// Define metadata for the story
const meta: Meta<typeof Button> = {
    title: 'Components/AdvancedButton',
    component: Button,
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'danger', 'warning', 'success', 'info'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        isLoading: { control: 'boolean' },
    },
};

export default meta;

type Story = StoryObj<typeof Button>;

// Primary Button story
export const Primary: Story = {
    args: {
        children: 'Primary Button',
        variant: 'primary',
    },
};

// Secondary Button story
export const Secondary: Story = {
    args: {
        children: 'Secondary Button',
        variant: 'secondary',
    },
};

// Danger Button story
export const Danger: Story = {
    args: {
        children: 'Danger Button',
        variant: 'danger',
    },
};

// Warning Button story
export const Warning: Story = {
    args: {
        children: 'Warning Button',
        variant: 'warning',
    },
};

// Success Button story
export const Success: Story = {
    args: {
        children: 'Success Button',
        variant: 'success',
    },
};

// Info Button story
export const Info: Story = {
    args: {
        children: 'Info Button',
        variant: 'info',
    },
};

// Large Button story
export const Large: Story = {
    args: {
        children: 'Large Button',
        size: 'large',
    },
};

// Small Button story
export const Small: Story = {
    args: {
        children: 'Small Button',
        size: 'small',
    },
};

// Button with Icon story
export const WithIcon: Story = {
    args: {
        children: 'Button with Icon',
        icon: <span style={{ marginRight: '8px' }}>⭐</span>,
    },
};

// Loading Button story
export const Loading: Story = {
    args: {
        children: 'Loading Button',
        isLoading: true,
    },
};

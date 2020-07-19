import React from "react";
import Detector from "./detector";
import { render, screen, fireEvent } from '@testing-library/react';

describe('detect network', () => {
    test('should render American Express', () => {
        render(<Detector />);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '341234567890123' },
        });

        expect(screen.queryByText(/American Express/)).toBeInTheDocument();
    });
    test('should render Diners Club', () => {
        render(<Detector />);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '38123456789012' },
        });

        expect(screen.queryByText(/Diners Club/)).toBeInTheDocument();
    });
    test('should render MasterCard', () => {
        render(<Detector />);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '5512345678901245' },
        });

        expect(screen.queryByText(/MasterCard/)).toBeInTheDocument();
    });
    test('should render Visa', () => {
        render(<Detector />);

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: '4512345678901' },
        });

        expect(screen.queryByText(/Visa/)).toBeInTheDocument();
    });
});


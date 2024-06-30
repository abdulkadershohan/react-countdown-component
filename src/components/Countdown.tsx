import { Container } from '@mui/material';
import LiveClock from '../utils/LiveClick';

type ICountdownProps = {
    expiresAt: string | number | Date;
    rest?: unknown;
    variant?: 'default' | 'primary' | 'secondary';
};

export default function Countdown({ expiresAt, variant = 'default', ...rest }: ICountdownProps) {
    switch (variant) {
        case 'primary':
            return (
                <Container>
                    <LiveClock expiresAt={expiresAt} />
                </Container>
            );
        case 'secondary':
            return (
                <Container>
                    <LiveClock expiresAt={expiresAt} />
                </Container>
            );
        default:
            return <LiveClock expiresAt={expiresAt} />
    }
}

import { StyledClock } from './styled'
import { useCurrentDate } from '../useCurrentDate';

const Clock = () => {
    const formattedDate = useCurrentDate();

    return (
        <StyledClock>
            {formattedDate}
        </StyledClock>
    );
}

export default Clock;
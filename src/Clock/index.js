import { StyledClock } from './styled'
import { useCurrentDate } from '../useCurrentDate';

const Clock = () => {
    const currentDate = useCurrentDate();
    
    const formatDateTime = (date) => {
        const days = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
        const dayName = days[date.getDay()];
        
        return `Dziś jest ${dayName}, ${date.toLocaleString('pl-PL', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        })}`;
    };

    return (
        <StyledClock>
            {formatDateTime(currentDate)}
        </StyledClock>
    );
};

export default Clock;
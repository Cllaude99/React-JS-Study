import { useRecoilState, useRecoilValue } from 'recoil';
import { hourSelector, minuteState } from '../stores/atoms';

const Selectors = () => {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const [hours, setHours] = useRecoilState(hourSelector);

  const onMinuteChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinutes(+e.currentTarget.value);
  };
  const onHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };
  return (
    <div>
      <input
        type="number"
        placeholder="minutes"
        value={minutes}
        onChange={onMinuteChage}
      />
      <input
        type="number"
        placeholder="hours"
        value={hours}
        onChange={onHourChange}
      />
    </div>
  );
};

export default Selectors;

import { Step } from './Step';
import { useStepList } from '../utils/useStepList';

export const StepList = () => {
  const { stepList } = useStepList();

  return (
    <div>
      StepList
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {stepList &&
          stepList.map(({ id, target, name }, index) => (
            <Step id={id} target={target} name={name} key={index} />
          ))}
      </div>
    </div>
  );
};

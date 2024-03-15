import { useState } from 'react';
import { FormValues } from '../utils/constants';
import { useStepList } from '../utils/useStepList';

export const StepForm = () => {
  const { createListItem } = useStepList();
  const [showForm, setShowForm] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    name: 'stepName',
    target: 'stepTarget',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'stepName') {
      setFormValues({ ...formValues, name: value });
    }
    if (name === 'stepTarget') {
      setFormValues({ ...formValues, target: value });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createListItem(formValues);
  };

  return (
    <div
      style={{
        margin: '5px',
        width: '40%',
      }}
    >
      {!showForm ? (
        <button onClick={() => setShowForm(!showForm)}>Add new step</button>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='stepName'>step Name: </label>
            <input
              type='text'
              name='stepName'
              id='stepName'
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor='stepTarget'>step Target: </label>
            <input
              type='text'
              name='stepTarget'
              id='stepTarget'
              value={formValues.target ?? ''}
              onChange={handleChange}
            />
          </div>
          <div>
            <input type='submit' value='Submit' />
          </div>
        </form>
      )}
    </div>
  );
};

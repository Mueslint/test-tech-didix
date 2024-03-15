import { useState } from 'react';
import type { FormValues, StepType } from '../utils/constants';
import { useStepList } from '../utils/useStepList';

type StepProps = StepType;

export const Step = ({ id, target, name }: StepProps) => {
  const { updateListItem } = useStepList();

  const [editMode, setEditMode] = useState(false);
  const [editFormValues, setEditFormValues] = useState<FormValues>({
    name,
    target,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    if (name === 'stepName') {
      setEditFormValues({ ...editFormValues, name: value });
    }
    if (name === 'stepTarget') {
      setEditFormValues({ ...editFormValues, target: value });
    }
  };

  const handleSubmit = () => {
    updateListItem({ id, ...editFormValues });
    setEditMode(!editMode);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '40%',
        margin: '5px',
        padding: '5px',
        backgroundColor: 'tomato',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: 'gray',
          margin: '5px',
          padding: '5px',
          color: 'white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flex: '1',
            justifyContent: 'space-between',
          }}
        >
          <>
            <span>id: {id}</span>
            <span>target: {target ?? 'N/A'}</span>
            <span>name: {name}</span>
            {!editMode && (
              <button onClick={() => setEditMode(!editMode)}>edit</button>
            )}
          </>
        </div>
      </div>

      {editMode && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            backgroundColor: 'gray',
            margin: '5px',
            padding: '5px',
            color: 'white',
          }}
        >
          <div
            style={{
              display: 'flex',
              flex: '1',
              justifyContent: 'space-between',
            }}
          >
            <>
              <span>id: {id}</span>
              <div>
                <label htmlFor='stepName'>step Name: </label>
                <input
                  type='text'
                  name='stepName'
                  id='stepName'
                  value={editFormValues.name}
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
                  value={editFormValues.target ?? ''}
                  onChange={handleChange}
                />
              </div>
              <button onClick={() => handleSubmit()}>confirm</button>
            </>
          </div>
        </div>
      )}
    </div>
  );
};

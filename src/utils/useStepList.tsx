import { useEffect, useState } from 'react';
import { StepType, testStepList } from './constants';

export const useStepList = () => {
  const [stepList, setStepList] = useState<StepType[] | null>(testStepList);

  useEffect(() => {
    fetch(
      'https://284b18e2-1e07-4fb4-a0aa-d1b748409dca-00-3ps26m01e2o7h.spock.replit.dev/steps',
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          const fetchedData: StepType[] = data;
          setStepList(fetchedData);
        }
      })
      .catch((e) => {
        console.log('error', e);
      });
  }, []);

  const createListItem = ({ name, target }: Omit<StepType, 'id'>) => {
    fetch(
      'https://284b18e2-1e07-4fb4-a0aa-d1b748409dca-00-3ps26m01e2o7h.spock.replit.dev/steps',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, target }),
      }
    ).catch((e) => {
      console.log('catch createListItem', JSON.stringify({ name, target }));
    });
  };

  const updateListItem = ({ id, name, target }: StepType) => {
    fetch(
      `https://284b18e2-1e07-4fb4-a0aa-d1b748409dca-00-3ps26m01e2o7h.spock.replit.dev/steps/${id}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, target }),
      }
    ).catch((e) => {
      console.log('catch updateListItem', JSON.stringify({ name, target }));
    });
  };

  return { stepList, createListItem, updateListItem };
};

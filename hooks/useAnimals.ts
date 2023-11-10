import { useEffect, useState } from 'react';

import { CanceledError } from 'axios';
// eslint-disable-next-line import-helpers/order-imports
import adoptedAnimalService, {
  AdoptedAnimal,
} from '~/services/adopted-animal-service';

export const useAnimals = () => {
  const [animals, setAnimals] = useState<AdoptedAnimal[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const { request, cancel } = adoptedAnimalService.getAll<AdoptedAnimal>();
    setLoading(true);
    request
      .then((res) => {
        setAnimals(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, []);

  return { animals, error, isLoading, setAnimals, setError };
};

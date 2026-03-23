import { useState } from 'react';
import axios from 'axios';
import { useError } from './useError.ts';
import { useOverlayLoading } from './useOverlayLoading.ts';
import { URL } from '../constants.ts';
import type { Joke } from '../types/joke.ts';

export function useData() {
  const [data, setData] = useState<Joke | null>(null);
  const { showOverlay, hideOverlay } = useOverlayLoading();
  const { error, setError } = useError();

  async function getData() {
    showOverlay();
    try {
      const response = await axios.get(URL);
      console.log(response);
      setData(response.data);
    } catch (error) {
      if (error instanceof Error) {
        setError('Failed to fetch data. Please try again later.');
      }
    } finally {
      hideOverlay();
    }
  }

  return {
    data,
    error,
    getData
  };
}
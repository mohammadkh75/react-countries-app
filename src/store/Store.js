import { create } from 'zustand'

const useCountryStore = create((set) => ({
    SearchQuery: '',
    SetSearchQuery: (query) => set({ SearchQuery: query }),

    FilterQuery:'',
  

    SetFilterQuery: (query) => set({ FilterQuery: query }),
}));

export default useCountryStore;
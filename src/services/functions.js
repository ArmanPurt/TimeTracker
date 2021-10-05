export const flattenObjectDataset = (data) => {
  return data?.byId ? Object.values(data.byId) : [];
};

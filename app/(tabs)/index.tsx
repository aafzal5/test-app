/* eslint-disable no-unused-expressions */
/* eslint-disable prettier/prettier */
/* eslint-disable import/order */
/* eslint-disable prettier/prettier */
import { useMutation, useQuery } from '@tanstack/react-query';
import { ActivityIndicator, Text, View } from 'react-native';
import { addAudits, searchAudits } from '~/api/audits';

const TabOneScreen = () => {
  const {
    data: audits,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['audits'],
    queryFn: searchAudits,
  });
  const { mutate } = useMutation({ mutationFn: addAudits });
  return (
    <View className="items-center flex-1 justify-center">
      {isLoading && <ActivityIndicator size="large" />}
      {isError && <Text>{error?.message}</Text>}
      {audits?.data?.map((audit: any) => <Text>{audit.updated_at}</Text>)}
    </View>
  );
};

export default TabOneScreen;

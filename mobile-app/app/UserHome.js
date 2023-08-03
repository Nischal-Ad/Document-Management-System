import { View, Text, Button, SafeAreaView } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const UserHome = () => {
	const router = useRouter();
	return (
		<SafeAreaView>
			<Text>thik xa</Text>
			<Button onPress={() => router.back()} title='go back' />
		</SafeAreaView>
	);
};

export default UserHome;

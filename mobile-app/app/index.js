import { View, Text, SafeAreaView, Image, TextInput, Button } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import logo from '../assects/logo.png';

const index = () => {
	return (
		<SafeAreaView>
			<ScrollView>
				<View className='flex items-center mb-5'>
					<Image source={logo} />
				</View>
				<View className='mt-4'>
					<Text htmlFor='input-group-1' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						Email *
					</Text>
					<View className='relative mb-6'>
						<View className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'></View>
						<TextInput
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Email'
							required
							keyboardType='email-address'
						/>
					</View>
					<Text htmlFor='input-group-1' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
						Password *
					</Text>
					<View className='relative mb-6'>
						<View className='absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none'></View>
						<TextInput
							className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
							placeholder='Password'
							required
							keyboardType='visible-password'
						/>
					</View>
					<Button title='Login' className='py-4' />
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default index;

import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	background: {
		backgroundColor: '#4C3575'
	},
	error: {
		color: 'red',
		marginBottom: 10
	},
	container: {
		flex: 1,
		alignItems: 'center',
		marginTop: '5%'
	},
	radioContainer: {
		flexDirection: 'row',
		width: '40%',
		justifyContent: 'space-between'
	},
	header: {
		color: '#FFFFFF',
		fontFamily: 'monospace',
		fontSize: 30,
		fontWeight: 'bold',

	},
	label: {
		color: '#FFFFFF',
		fontFamily: 'monospace',
		fontWeight: '550',
		marginBottom: '2%'
	},
	radioLabel: {
		color: '#FFFFFF',
		fontFamily: 'monospace',
		width: '100%',
		justifyContent: 'center',
		fontWeight: '550',
		marginBottom: '2%'
	},
	switch: {
		alignSelf: 'flex-start',
		marginLeft: 40
	},
	switchText: {
		color: '#FFFFFF',
		alignSelf: 'flex-start',
		marginLeft: 20
	},
	input: {
		fontFamily: 'monospace',
		color: '#FFFFFF',
		width: '40%',
		borderWidth: 1,
		borderRadius: 50,
		borderColor: '#7858A6',
		marginBottom: '5%',
		height: 50,
		alignItems: 'center',

	},
	radio: {

	},
	result: {
		fontSize: 50,
		marginTop: '10%',
	},
	btn: {
		backgroundColor: '#371B58',
		marginTop: '10%',
		width: '50%',
	}
});
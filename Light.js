import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	background: {
		backgroundColor: '#FFE6F7'
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
		color: '#c666f2',
		fontFamily: 'monospace',
		fontSize: 30,
		fontWeight: 'bold',

	},
	label: {
		color: '#c666f2',
		fontFamily: 'monospace',
		fontWeight: '550',
		marginBottom: '2%'
	},
	radioLabel: {
		color: '#c666f2',
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
		color: '#c666f2',
		alignSelf: 'flex-start',
		marginLeft: 20
	},
	input: {
		fontFamily: 'monospace',
		width: '40%',
		borderWidth: 1,
		borderRadius: 50,
		borderColor: '#C689C6',
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
		backgroundColor: '#FFABE1',
		marginTop: '10%',
		width: '50%',
	}
});
import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = ({ text, id, onDeleteGoal }) => {
	return (
		<View style={styles.goalItem}>
			<Pressable
				onPress={onDeleteGoal.bind(this, id)}
				android_ripple={{ color: "#210644" }}>
				<Text style={styles.goalText}>{text}</Text>
			</Pressable>
		</View>
	);
};
export default GoalItem;

const styles = StyleSheet.create({
	goalItem: {
		marginTop: 8,
		marginBottom: 8,
		borderRadius: 6,
		backgroundColor: "#f31282"
	},
	goalText: {
		padding: 8,
		color: "white"
	}
});

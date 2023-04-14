import { useState } from "react";
import {
	Button,
	Image,
	Modal,
	StyleSheet,
	TextInput,
	View,
	Text
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
	const [enteredGoalText, setEnteredGoalText] = useState("");
	const [error, setError] = useState(false);

	function goalInputHandler(enteredText) {
		if (error) {
			setError(false);
		}
		setEnteredGoalText(enteredText);
	}

	function addGoalHandler() {
		if (enteredGoalText === "") {
			setError(true);
			return;
		}
		onAddGoal(enteredGoalText);
		setEnteredGoalText("");
	}

	return (
		<Modal visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<Image
					style={styles.image}
					source={require("../assets/images/goal.png")}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="Your course goal!"
					onChangeText={goalInputHandler}
					value={enteredGoalText}
				/>
				{error && <Text style={styles.error}>Please enter a goal</Text>}
				<View style={styles.buttonContainer}>
					<View style={styles.button}>
						<Button title="Add Goal" onPress={addGoalHandler} color="#5e0acc" />
					</View>
					<View style={styles.button}>
						<Button title="Cancel" onPress={onCancel} color="#f31282" />
					</View>
				</View>
			</View>
		</Modal>
	);
};
export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		backgroundColor: "#311b6b"
	},
	textInput: {
		borderWidth: 1,
		borderColor: "#e4d0ff",
		backgroundColor: "#e4d0ff",
		color: "#120438",
		borderRadius: 6,
		width: "100%",
		padding: 16
	},
	image: {
		width: 100,
		height: 100,
		margin: 20
	},
	buttonContainer: {
		marginTop: 16,
		flexDirection: "row"
	},
	button: {
		width: 100,
		marginHorizontal: 8
	},
	error: {
		color: "red",
		marginTop: 8,
		fontSize: 16
	}
});

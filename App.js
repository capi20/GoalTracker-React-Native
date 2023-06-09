import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, FlatList, StyleSheet, View, Text } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
	const [courseGoals, setCourseGoals] = useState([]);
	const [modalIsVisible, setModalIsVisible] = useState(false);

	function startAddGoalHandler() {
		setModalIsVisible(true);
	}

	function endAddGoalHandler() {
		setModalIsVisible(false);
	}

	function addGoalHandler(enteredGoalText) {
		setCourseGoals((currentCourseGoals) => [
			...currentCourseGoals,
			{ text: enteredGoalText, id: Math.random().toString() }
		]);
		endAddGoalHandler();
	}

	function deleteGoalHandler(id) {
		setCourseGoals((currentCourseGoals) => {
			return currentCourseGoals.filter((goal) => goal.id !== id);
		});
	}

	return (
		<>
			<StatusBar style="light" />
			<View style={styles.appContainer}>
				<Button
					title="Add New Goal"
					color="#5e0acc"
					onPress={startAddGoalHandler}
				/>
				{courseGoals.length > 0 && <Text style={styles.heading}>Goals</Text>}

				{modalIsVisible && (
					<GoalInput
						visible={modalIsVisible}
						onAddGoal={addGoalHandler}
						onCancel={endAddGoalHandler}
					/>
				)}
				<View style={styles.goalsContainer}>
					<FlatList
						data={courseGoals}
						renderItem={(itemData) => {
							return (
								<GoalItem
									text={itemData.item.text}
									id={itemData.item.id}
									onDeleteGoal={deleteGoalHandler}
								/>
							);
						}}
						keyExtractor={(item) => item.id}
						alwaysBounceVertical={false}
					/>
				</View>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		paddingTop: 50,
		paddingHorizontal: 16
	},

	heading: {
		color: "white",
		marginTop: 30,
		fontSize: 24,
		alignSelf: "center"
	},

	goalsContainer: {
		flex: 5
	}
});

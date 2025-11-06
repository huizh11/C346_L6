import React, { useState } from 'react';
import { View, Text, Button, Image, Alert, ScrollView, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const MyApp = () => {
    const [answer1, setAnswer1] = useState('');
    const [answer2, setAnswer2] = useState('');
    const [answer3, setAnswer3] = useState('');

    //correct ans
    const correctAnswers = ['Leopard', 'Elephant', 'Lion'];

    const checkAnswers = () => {
        let score = 0;
        if (answer1 === correctAnswers[0]) score++;
        if (answer2 === correctAnswers[1]) score++;
        if (answer3 === correctAnswers[2]) score++;

        if (score === 1 || score === 0) {
            Alert.alert(`Good try.. You got ${score} out of 3 correct!`);
        } else if (score === 3) {
            Alert.alert(`Well done! You got ${score} out of 3 correct!`);
        } else
            Alert.alert(`You got ${score} out of 3 correct!`);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.quizContainer}>

                {/* Title */}
                <Text style={styles.title}>Animal Quiz</Text>

                {/* Question 1 */}
                <Text style={styles.questionText}>Question 1: What animal is this?</Text>
                <Picker
                    selectedValue={answer1}
                    onValueChange={(value) => setAnswer1(value)}
                    style={styles.picker}
                >
                    <Picker.Item label="Leopard" value="Leopard" />
                    <Picker.Item label="Elephant" value="Elephant" />
                    <Picker.Item label="Lion" value="Lion" />
                    <Picker.Item label="Hippo" value="Hippo" />
                </Picker>

                <Image
                    source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40Hh4v74qyVE0CYNzqQVZS99g05ZgZEu4aw&s' }}
                    style={styles.image}
                />

                {/* Question 2 */}
                <Text style={styles.questionText}>Question 2: What animal is this?</Text>
                <Picker
                    selectedValue={answer2}
                    onValueChange={(value) => setAnswer2(value)}
                    style={styles.picker}
                >
                    <Picker.Item label="Leopard" value="Leopard" />
                    <Picker.Item label="Elephant" value="Elephant" />
                    <Picker.Item label="Lion" value="Lion" />
                    <Picker.Item label="Giraffe" value="Giraffe" />
                </Picker>

                <Image
                    source={{ uri: 'https://i.natgeofe.com/k/e7ba8001-23ac-457f-aedb-abd5f2fdda62/moms5_4x3.png' }}
                    style={styles.image}
                />

                {/* Question 3 */}
                <Text style={styles.questionText}>Question 3: What animal is this?</Text>
                <Picker
                    selectedValue={answer3}
                    onValueChange={(value) => setAnswer3(value)}
                    style={styles.picker}
                >
                    <Picker.Item label="Leopard" value="Leopard" />
                    <Picker.Item label="Elephant" value="Elephant" />
                    <Picker.Item label="Lion" value="Lion" />
                    <Picker.Item label="Parrot" value="Parrot" />
                </Picker>

                <Image
                    source={{ uri: 'https://cdn.britannica.com/29/150929-050-547070A1/lion-Kenya-Masai-Mara-National-Reserve.jpg' }}
                    style={styles.image}
                />

                {/* Submit Button */}
                <Button title="Submit Answers" onPress={checkAnswers} color="#4CAF50" />
            </View>
        </ScrollView>
    );
};

// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f9',
    },
    quizContainer: {
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#493548',
        textAlign: 'center',
        marginBottom: 30,
    },
    questionText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#555',
        marginBottom: 10,
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: 250,
        marginBottom: 20,
        borderRadius: 15, // Rounded corners for a modern feel
    },
    picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginBottom: 30,
    },
});

export default MyApp;

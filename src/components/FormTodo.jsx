import { useState } from "react";
import {
	FormControl,
	FormLabel,
	FormErrorMessage,
	Box,
	Input,
	Textarea,
	Flex,
	Button,
} from "@chakra-ui/react";

export const FormTodo = ({ addTodo }) => {
	const [todo, setTodo] = useState("");
	const [description, setDescription] = useState("");
	const [errors, setErrors] = useState({});

	const handleTodoChange = (e) => {
		setTodo(e.target.value);
		if (errors.todo) {
			setErrors((prev) => ({ ...prev, todo: "" }));
		}
	};

	const handleDescriptionChange = (e) => {
		setDescription(e.target.value);
		if (errors.description) {
			setErrors((prev) => ({ ...prev, description: "" }));
		}
	};

	const validateForm = () => {
		const newErrors = {};
		if (!todo) newErrors.todo = "Todo is required";
		if (todo.length <= 2) newErrors.todo = "Short todo";
		if (todo.length >= 12) newErrors.todo = "Long todo";

		if (!description) newErrors.description = "Description is required";
		if (description.length <= 2) newErrors.description = "Short description";
		if (description && description.length >= 30)
			newErrors.description = "Long description";
		return newErrors;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formErrors = validateForm();
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
		} else {
			setTodo("");
			setDescription("");
			const newtodo = {
				title: todo,
				description,
				isComplete: false,
			};
			addTodo(newtodo);
		}
	};

	return (
		<Box w="100%">
			<form onSubmit={handleSubmit}>
				<Flex direction="column" gap="3">
					<FormControl isInvalid={errors.todo}>
						<FormLabel>Todo</FormLabel>
						<Input
							value={todo}
							onChange={handleTodoChange}
							placeholder="Enter your todo"
						/>
						{errors.todo && <FormErrorMessage>{errors.todo}</FormErrorMessage>}
					</FormControl>

					<FormControl isInvalid={errors.description}>
						<FormLabel>Description</FormLabel>
						<Textarea
							value={description}
							onChange={handleDescriptionChange}
							placeholder="Enter your description"
							h="100px"
						/>
						{errors.description && (
							<FormErrorMessage>{errors.description}</FormErrorMessage>
						)}
					</FormControl>

					<Button type="submit" colorScheme="blue">
						Add Todo
					</Button>
				</Flex>
			</form>
		</Box>
	);
};

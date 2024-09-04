import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Box,
	Flex,
	Grid,
	Heading,
} from "@chakra-ui/react";

export const ListTodos = ({ todos, updateTodo }) => {
	const handleClick = (todoIndex) => {
		updateTodo(todoIndex);
	};
	return (
		<Grid mt="10" w="100%">
			<Heading size="xl" mb="10">
				Todo list 🗒️
			</Heading>
			<Accordion allowMultiple={true}>
				{todos.map((todo, index) => (
					<AccordionItem key={index}>
						<AccordionButton>
							<Flex
								as="h2"
								flex="1"
								textAlign="left"
								align="center"
								fontSize={"20"}
								fontWeight={"bold"}
								gap={5}
								color={todo.isComplete ? "green.500" : "red.500"}
							>
								<Box onClick={() => handleClick(index)}>
									{todo.isComplete ? <CheckIcon /> : <CloseIcon />}
								</Box>
								{todo.title}
							</Flex>
							<AccordionIcon />
						</AccordionButton>
						<AccordionPanel>{todo.description}</AccordionPanel>
					</AccordionItem>
				))}
			</Accordion>
		</Grid>
	);
};

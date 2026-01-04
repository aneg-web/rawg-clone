import { type Genre } from "../hooks/useGenres";
import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2" marginBottom={3}>
        Genres
      </Heading>
      <List.Root as="ul" listStyle="none">
        {data?.map((genre) => (
          <List.Item key={genre.id} paddingY="5px">
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                flex="1"
                minW={0}
                h="auto"
                justifyContent="flex-start"
                textAlign="left"
                whiteSpace="normal"
                onClick={() => onSelectGenre(genre)}
                variant="plain"
                fontSize="lg"
                px={1}
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;

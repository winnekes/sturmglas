import { Box, Flex, HStack, Text, Textarea, VStack } from "@chakra-ui/react";
import { Dispatch, FunctionComponent, SetStateAction, useState } from "react";
import { OptionsType } from "react-select";
import { useTagsQuery } from "../../../types/graphql";
import { ErrorAlert } from "../../generic/error-alert";
import { Loading } from "../../generic/loading";
import Creatable from "react-select/creatable";
import { customStyles } from "../../generic/styles";
import { TagInput } from "./add-mood-modal";

type Props = {
  note: string;
  setNote: Dispatch<SetStateAction<string>>;
  selectedTags: TagInput[];
  setSelectedTags: Dispatch<SetStateAction<TagInput[]>>;
};

export const SetMoodContext: FunctionComponent<Props> = ({
  note,
  setNote,
  selectedTags,
  setSelectedTags,
}) => {
  const { data, error, loading } = useTagsQuery();

  const handleChange = (values: OptionsType<{ value: string; label: string }>, actionMeta: any) => {
    const mappedValues = values.map(value => ({ name: value.label }));
    setSelectedTags(mappedValues);
  };

  const options = data?.tags.map(tag => ({ value: tag.name, label: tag.name }));
  const initialValues = selectedTags?.map(tag => ({ value: tag.name, label: tag.name }));

  return (
    <>
      <Text mb={10}>You don't need to, but reflecting on your mood never hurts.</Text>
      {loading && <Loading />}
      {error && <ErrorAlert />}
      {data && (
        <Box>
          <Text fontWeight="bold">What where you doing?</Text>
          <Text mb="8px" fontSize="sm">
            You can add anything here. These labels will be saved and you can use as many as you
            need.
          </Text>
          <Creatable
            styles={customStyles}
            noOptionsMessage={() => "Start typing to create a new label"}
            isMulti
            isSearchable
            options={options}
            placeholder="Select one or more labels"
            value={initialValues}
            onChange={handleChange}
          />
        </Box>
      )}
      <Box mt={10}>
        <Text fontWeight="bold">Add your thoughts</Text>
        <Text mb="8px" fontSize="sm">
          You can add anything here. These tags will be created and you can use them in the future.
        </Text>
        <Textarea value={note} rows={2} onChange={e => setNote(e.target.value)} />
      </Box>
    </>
  );
};

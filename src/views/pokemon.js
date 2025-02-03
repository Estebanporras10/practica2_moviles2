import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import { Picker } from '@react-native-picker/picker';
import axios from "axios";
import styles from "../style/stylePokedex";
import Modal from "../components/modal";

const generationRanges = {
  1: { offset: 0, limit: 151 },
  2: { offset: 151, limit: 100 },
  3: { offset: 251, limit: 135 },
  4: { offset: 386, limit: 107 },
  5: { offset: 493, limit: 156 },
  6: { offset: 649, limit: 72 },
  7: { offset: 721, limit: 88 },
  8: { offset: 809, limit: 89 },
};

const Home = () => {
  const [generation, setGeneration] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchPokemons = async (gen) => {
    try {
      const { offset, limit } = generationRanges[gen];
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);

      const fetches = response.data.results.map((pokemon) => axios.get(pokemon.url));
      const responses = await Promise.all(fetches);

      const pokemonData = responses.map((res) => ({
        id: res.data.id,
        name: res.data.name,
        image: res.data.sprites.front_default,
        types: res.data.types.map((t) => t.type.name).join(", "),
        abilities: res.data.abilities.map((a) => a.ability.name).join(", "),
        height: res.data.height,
        weight: res.data.weight,
      }));

      setPokemons(pokemonData);
    } catch (error) {
      console.error("Error fetching Pokemons: ", error);
    }
  };

  useEffect(() => {
    fetchPokemons(generation);
  }, [generation]);

  return (
    <View style={styles.container}>
      {/* Selector de generación */}
      <Picker selectedValue={generation} onValueChange={(itemValue) => setGeneration(itemValue)} style={styles.picker}>
        {Object.keys(generationRanges).map((gen) => (
          <Picker.Item key={gen} label={`Generación ${gen}`} value={parseInt(gen)} />
        ))}
      </Picker>

      {/* Lista de Pokémon */}
      <FlatList
        data={pokemons}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => { setSelectedPokemon(item); setIsModalOpen(true); }}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Modal de detalles */}
      {selectedPokemon && (
        <Modal visible={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <Text style={styles.title}>Nombre: {selectedPokemon.name}</Text>
          <Image source={{ uri: selectedPokemon.image }} style={styles.imageLarge} />
          <Text style={styles.text}>Número: {selectedPokemon.id}</Text>
          <Text style={styles.text}>Altura: {selectedPokemon.height}</Text>
          <Text style={styles.text}>Peso: {selectedPokemon.weight}</Text>
          <Text style={styles.text}>Tipo: {selectedPokemon.types}</Text>
          <Text style={styles.text}>Habilidades: {selectedPokemon.abilities}</Text>
        </Modal>
      )}
    </View>
  );
};

export default Home;

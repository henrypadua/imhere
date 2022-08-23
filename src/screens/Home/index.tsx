import { Participant } from '@components/Participant';
import {
   Alert,
   FlatList,
   Text,
   TextInput,
   TouchableOpacity,
   View
} from 'react-native';

import { styles } from './styles';

export function Home() {
   const participants = [
      'John',
      'Jane',
      'Joe',
      'Jack',
      'Jill',
      'Billy',
      'Bobby',
      'Mary',
      'Molly',
      'Moe',
      'Joan',
      'Juan'
   ];

   function handleParticipantAdd() {
      if (participants.includes('Jack')) {
         return Alert.alert(
            'Participante existe',
            'Já existe um participante na lista com esse nome.'
         );
      }
   }

   function handleParticipantRemove(name: string) {
      Alert.alert('Remover', `Remover o participante ${name}?`, [
         {
            text: 'Sim',
            onPress: () => Alert.alert('Deletado!')
         },
         {
            text: 'Não',
            style: 'cancel'
         }
      ]);
   }

   return (
      <View style={styles.container}>
         <Text style={styles.eventName}>Nome do evento</Text>

         <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2022.</Text>

         <View style={styles.form}>
            <TextInput
               style={styles.input}
               placeholder="Nome do participante"
               placeholderTextColor="#6B6B6B"
            />

            <TouchableOpacity
               style={styles.button}
               onPress={handleParticipantAdd}
            >
               <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
         </View>

         <FlatList
            data={participants}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
               <Participant name={item} onRemove={handleParticipantRemove} />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
               <Text style={styles.emptyListText}>
                  Nenhum participante adicionado ainda.
               </Text>
            )}
         />
      </View>
   );
}

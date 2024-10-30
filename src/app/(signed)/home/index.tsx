import { Typography } from '@components/atoms/Typography';
import { CourtCard } from '@components/molecules/courtCard';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

const MOCK_DATA = [
  {
    id: 1,
    image_url:
      'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/942ccb3e-38e5-45d6-964b-53c79a948ea0/dhddair-f1877c3e-67d7-4818-ab49-9bda1fe78261.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzk0MmNjYjNlLTM4ZTUtNDVkNi05NjRiLTUzYzc5YTk0OGVhMFwvZGhkZGFpci1mMTg3N2MzZS02N2Q3LTQ4MTgtYWI0OS05YmRhMWZlNzgyNjEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ejD5Fvu6wYQ7rXU4x4E0_7eduDGrl__OsfaspOBMasc',
    name: 'Torcida jovem',
    description:
      'Campo para um futzin com os cria ta ligado bom demais esse aqui so colar e bate bolinha la ele',
    rate: 4.6,
  },
  {
    id: 2,
    image_url: 'https://icon2.cleanpng.com/20180602/afb/avosaqj72.webp',
    name: 'Item 2',
    description: 'Description for item 2',
    rate: 2,
  },
  {
    id: 3,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHD7ATvbwbwMLLztcBzuSvN_L_Nxq2kXcFw&s',
    name: 'Item 3',
    description: 'Description for item 3',
    rate: 4.5,
  },
  {
    id: 4,
    image_url:
      'https://static.vecteezy.com/ti/vetor-gratis/p1/8280239-emblema-logo-futebol-com-uma-bola-de-futebol-ilustracao-equipe-esporte-logotipo-modelo-vetor.jpg',
    name: 'Item 4',
    description: 'Description for item 4',
    rate: 3.9,
  },
  {
    id: 5,
    image_url:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoU3pRATAktq2Zfjn1Z9HVNfA9docZJi1dYA&s',
    name: 'Item 4',
    description: 'Description for item 4',
    rate: 3.9,
  },
];

export default function Home() {
  return (
    <View style={{ width: '75%' }}>
      {MOCK_DATA.map(item => (
        <CourtCard
          avatar={item.image_url}
          description={item.description}
          rate={item.rate}
          title={item.name}
        />
      ))}
    </View>
  );
}

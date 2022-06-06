import type { NextPage } from 'next'

import Title from '../ui/components/Title/Title'
import List from '../ui/components/List/List'

const Home: NextPage = () => {
  return (
    <div>
      <Title
        TitleText=""
        SubtitleText={
          <span>
            Com um pequeno valor mensal, você pode{' '}
            <strong>adotar um pet virtualmente.</strong>
          </span>
        }
      />
      <List
        pets={[
          {
            id: 1,
            name: 'Bidu',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit sed magnam mollitia dolor excepturi perspiciatis dolores doloremque provident qui. Ut unde, dolores facere culpa dolorum obcaecati labore delectus deleniti.',
            image:
              'https://www.mundoecologia.com.br/wp-content/uploads/2019/11/Bidu-da-Turma-da-M%C3%B4nica.jpg'
          },
          {
            id: 2,
            name: 'Coragem',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit sed magnam mollitia dolor excepturi perspiciatis dolores doloremque provident qui. Ut unde, dolores facere culpa dolorum obcaecati labore delectus deleniti.',
            image:
              'https://rollingstone.uol.com.br/media/stories/episodios-assustadores-de-coragem-o-cao-covarde/assets/5.jpeg'
          },
          {
            id: 3,
            name: 'Mutley',
            description:
              'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas impedit sed magnam mollitia dolor excepturi perspiciatis dolores doloremque provident qui. Ut unde, dolores facere culpa dolorum obcaecati labore delectus deleniti.',
            image:
              'https://images.tcdn.com.br/img/img_prod/697730/adesivo_lateral_vidro_caminhao_carro_decorativo_mutley_1147486506_1_10004d4a25c5e024890ecfacd8c09c3b.jpg'
          }
        ]}
      />
    </div>
  )
}

export default Home

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
      <List />
    </div>
  )
}

export default Home

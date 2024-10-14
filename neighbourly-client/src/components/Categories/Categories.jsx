
import CategoryBox from './CategoryBox'
import { categories } from './CategoriesData.js'
import ContainerLayout from '../../layouts/ContainerLayout.jsx';
import SectionTitle from '../SectionTitle/SectionTitle.jsx';
const Categories = () => {
  return (
    <ContainerLayout>
      <SectionTitle heading="Our Services" description="Providing expert home services with skilled professionals, ensuring reliable, high-quality solutions for all your household needs." />
      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map(item => (
          <CategoryBox key={item.label} label={item.label} icon={item.icon} />
        ))}
      </div>
    </ContainerLayout>
  )
}

export default Categories;
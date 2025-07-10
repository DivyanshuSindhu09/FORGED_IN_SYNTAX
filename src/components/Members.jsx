import TrueFocus from '../blocks/TextAnimations/TrueFocus/TrueFocus'
import GradientCards from '../blocks/Components/GradientCards/GradientCards'

const Members = () => {
  return (
    <section className='w-full min-h-screen bg-black  overflow-hidden  overflow-y-auto'>
      <div className='mt-10 '>
        <TrueFocus/>
      </div>
        <div className='w-full mt-20 mb-20 overflow-hidden overflow-y-auto min-h-screen'>
        <GradientCards/>
        </div>
    </section>
  )
}

export default Members
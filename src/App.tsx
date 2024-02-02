import GlobalStyle from './globalStyles'
import './App.css'
import Header from './components/Header/Header'
import Nav from './components/nav/Nav'
import FormSection from './components/Form/FormSection/FormSection'
import General from './components/General/General'
import GetStarted from './components/GetStarted/GetStarted'
import Footer from './components/Footer/Footer'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
      queries: {
          staleTime: 0
      }
  }
})


function App() {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <GlobalStyle></GlobalStyle>
      <section className='container'>
      <Nav></Nav>
      <Header></Header>
      <FormSection></FormSection>
      <General></General>
    
      </section>
      <GetStarted></GetStarted>
      <Footer></Footer>
      </QueryClientProvider>
    </div>
  )
}

export default App

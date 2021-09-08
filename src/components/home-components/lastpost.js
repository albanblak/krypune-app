import styled from "styled-components";
import LastPostCard from "./mini-components/lastPostCard";

const Container = styled.div`
     display: flex;
     justify-content: center;
     align-items: flex-start;
     margin-top: 20px;
     margin-bottom: 70px;
   `

const Wrapper = styled.div`
      width: 1200px;
      height: 100%;
    `

const PostContainer = styled.div`
        display: flex;
        justify-content: space-between;
    `

const Lastpost = () => {
    const posts = [
        {
            id: 0,
            image: 'https://krypune.com/wp-content/uploads/2020/12/cv-498x315.png',
            title: 'Keshilla per tju ndihmuar te plotesoni nje CV profesionale',
            text: 'Ndërsa struktura e një CV është fleksibile, e fokusuar në',

        },
        {
            id: 1,
            image: 'https://krypune.com/wp-content/uploads/2015/10/pf-s54-karolina-grabowska-kaboompics-9580-1-498x315.png',
            title: 'Perse "FREELANCING" munde te jete zgjidhje e duhur per ju',
            text: 'Një mënyrë e shkëlqyeshme për të fituar të ardhura shtesë!',
        },
        {
            id: 2,
            image: 'https://krypune.com/wp-content/uploads/2015/10/marketing-1-498x315.png',
            title: 'Arsyet per te punsuar nje profesionist te pavarur "FreeLAncing',
            text: 'Punëtorët e pavarur “Freelancers” kanë kosto më të ulët Kur'
        }
    ]









    return(
            <Container>
                <Wrapper>
                    <h2 style={{textAlign: 'left', borderBottom: '1px solid black',paddingBottom: '10px'}} >Postimet e fundit</h2>
                    <PostContainer>
                        {posts.map((post) => (
                            <LastPostCard title={post.title}  key={post.id}  image={post.image} text={post.text}/>
                            )
                        )}
                    </PostContainer>
                </Wrapper>
            </Container>
    )
}

export default Lastpost;
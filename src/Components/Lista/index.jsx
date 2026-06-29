import { Swiper,SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"

import "swiper/css";
import "swiper/css/navigation";

import * as S from "./styles.js"

export function Lista({ objetos }) {
  
  
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      spaceBetween={0}
      slidesPerView={7}
    >
      {objetos.map((objeto) => (

        <SwiperSlide key={objeto.nome} >
          
          <S.Container>

            <S.ImageContainer>
              <S.Image src={objeto.imagem}/>
            </S.ImageContainer>

            <S.Name>{objeto.nome}</S.Name>

            <S.NotaContainer>
              <S.Nota nota={objeto.nota}>{objeto.nota}</S.Nota>
              <S.NotaTexto>
                {objeto.nota < 20 ? "Muito Ruim" 
                : objeto.nota < 40 ? "Ruim" 
                : objeto.nota < 65 ? "Medio" 
                : objeto.nota < 75 ? "Bom"
                : objeto.nota < 85 ? "Excelente"
                : "Perfeito"}</S.NotaTexto>
            </S.NotaContainer>
          </S.Container>


        </SwiperSlide>
      ))}
    </Swiper>
  );
}
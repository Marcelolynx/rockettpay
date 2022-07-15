import * as S from './styles'
import logoImg from '../../Assets/logo.svg'


export function Header() {
    return(
        <S.Container>
            <S.Content>
                <img src={logoImg} alt='dt Money' />
                <button type="button" onClick={handleOpenNewTransactionModal}>Nova Transação</button>
            </S.Content>
        </S.Container>
    )
}
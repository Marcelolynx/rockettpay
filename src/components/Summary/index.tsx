import { Wrapper } from "./styles";
import incomeImg from "../../Assets/income.svg"
import outcomeImg from "../../Assets/outcome.svg"
import totalImg from "../../Assets/total.svg"

export function Summary() {
    return (
        <Wrapper> 
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>R$1.000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saidas</p>
                    <img src={outcomeImg} alt="Saidas" />
                </header>
                <strong>- R$453,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Saldo</p>
                    <img src={totalImg} alt="Saldo" />
                </header>
                <strong>R$547,00</strong>
            </div>
        </Wrapper>
    )

}
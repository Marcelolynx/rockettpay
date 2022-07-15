import { useEffect } from "react";
import { api } from "../../services/api";
import { Wrapper } from "./styles";

export function TransactionTable() {
    useEffect(()    => {
        api.get('transactions') 
        .then(response => console.log(response.data))
    }, [])

    return(
        <Wrapper>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2022</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/03/2022</td>
                    </tr>
                </tbody>
            </table>
        </Wrapper>
    )
}
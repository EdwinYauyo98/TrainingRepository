import react from "react";
import analista from '../images/Images-FinalSection/analista.jng'
import '../FinalSection/FinalSection.scss';

export function FinalSection(){
    return(
        <div className="Container-Parent">
            <h1>TITTLE</h1>

            <div className="Container-Box">
                <div className="Box-Junior" id="Box-Left">
                    <img src={analista} alt="analista"></img>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, sodales vel elementum lacus torquent posuere habitasse cum, quisque purus placerat dui consequat augue nulla. Blandit erat venenatis sed mus nam ridiculus vestibulum integer natoque hendrerit condimentum non, gravida a hac vivamus cursus nisl eleifend inceptos mattis convallis tellus. 
                    </p>
                </div>
                <div className="Box-Junior">
                    <img src={analista} alt="analista"></img>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, sodales vel elementum lacus torquent posuere habitasse cum, quisque purus placerat dui consequat augue nulla. Blandit erat venenatis sed mus nam ridiculus vestibulum integer natoque hendrerit condimentum non, gravida a hac vivamus cursus nisl eleifend inceptos mattis convallis tellus. 
                    </p>
                </div>
                <div className="Box-Junior">
                    <img src={analista} alt="analista" id="Box-Right"></img>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit scelerisque, sodales vel elementum lacus torquent posuere habitasse cum, quisque purus placerat dui consequat augue nulla. Blandit erat venenatis sed mus nam ridiculus vestibulum integer natoque hendrerit condimentum non, gravida a hac vivamus cursus nisl eleifend inceptos mattis convallis tellus. 
                    </p>
                </div>
            </div>
            <div id="Enlace">
            <a href="#">Más información</a><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4xMzQsMjQxLjg0M2MtMC4wMDYtMC4wMDYtMC4wMTEtMC4wMTMtMC4wMTgtMC4wMTlsLTEwNC41MDQtMTA0Yy03LjgyOS03Ljc5MS0yMC40OTItNy43NjItMjguMjg1LDAuMDY4ICAgIGMtNy43OTIsNy44MjktNy43NjIsMjAuNDkyLDAuMDY3LDI4LjI4NEw0NDMuNTU4LDIzNkgyMGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjBjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBoNDIzLjU1NyAgICBsLTcwLjE2Miw2OS44MjRjLTcuODI5LDcuNzkyLTcuODU5LDIwLjQ1NS0wLjA2NywyOC4yODRjNy43OTMsNy44MzEsMjAuNDU3LDcuODU4LDI4LjI4NSwwLjA2OGwxMDQuNTA0LTEwNCAgICBjMC4wMDYtMC4wMDYsMC4wMTEtMC4wMTMsMC4wMTgtMC4wMTlDNTEzLjk2OCwyNjIuMzM5LDUxMy45NDMsMjQ5LjYzNSw1MDYuMTM0LDI0MS44NDN6IiBmaWxsPSIjZTRjMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==" />
            </div>
        </div>
    )   
}
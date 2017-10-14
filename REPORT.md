*201203405 류치현*

# Redux 
 Redux는 응용 프로그램 상태를 관리하도록 설계된 오픈 소스 JavaScript 라이브러리이다. JavaScript 애플리케이션에서 data-state와 UI-state를 관리해주는 도구이며, 상태적 데이터 관리가 시간이 흐름에 따라 복잡해질 수도 있는 싱글 페이지 애플리케이션(Single Page Application)에서 매우 유용하게 사용된다. Redux는 React 외에 jQuery, Angular를 사용하는 애플리케이션에서도 사용될 수 있다.
* * *

# Redux 등장 배경

### Flux의 등장
자바스크립트 싱글 페이지 애플리케이션이 갖추어야 할 요건이 점점 더 복잡해지면서, 많은 상태를 자바스크립트 코드로 관리할 필요가 생겨났다. 규모가 큰 애플리케이션에서 MVC(Model-View-Controller) 패턴은 Model과 View가 늘어나면서 프로젝트가 복잡해진다. 이를 해결하기 위해 Flux 아키텍처가 등장하게 되었으며, Flux 아키텍처는 Action->Dispatcher->Store->View->Action->Dispatcher->...로 이어지는 단 방향 데이터 흐름을 가장 큰 특징으로 가진다. 이러한 단 방향 흐름은 데이터를 관리하고 변화를 예측하는 것을 쉽게 하였다.

![FLUX](./img/flux.jpg)

### Redux의 등장
Flux 아키텍처가 발표된 이후, Flux에 대한 여러 구현체 드라이 등장하게 되었는데, 널리 사용되는 것 중 하나가 Redux이다. Redux는 사용법이 단순한 편이고 크기도 2KB 정도로 상당히 작은 편이다. React와 함께 많이 사용되지만 의존성이 없기 때문에 React와 상관없이 독립적으로 사용할 수도 있다.
* * *

# Redux의 3가지 원칙
1) Single Source of Truth
: Reudx는 어플리케이션의 state를 위해 단 한개의 store를 사용한다.

2) State is read-only
: 어플리케이션에서 state를 직접 변경 할 수는 없다. state를 변경하기 위해서는 action이 dispatch 되어야 한다.

3) Changes are made with Pure Functions
: Reducer는 '순수 함수'로만 작성되어야 한다. 즉,
 - 외부 네트워크 혹은 데이터베이스에 접근하지 않아야한다.
 - return 값은 오직 parameter 값에만 의존되어야한다.
 - 인수는 변경되지 않아야한다.
 - 같은 인수로 실행된 함수는 언제나 같은 결과를 반환해야한다.
 - 순수하지 않은 API 호출을 하지 말아야 한다. (Date 및 Math 의 함수 등)

* * *

>Action
>: 애플리케이션에서 Store로 보내는 데이터 묶음
>
>Reducer
>: '변화'를 일으키는 순수 함수. '이전 상태'와 'Action'을 받아서 '다음 상태'를 반환한다.
>
>Store
>: 어플리케이션의 상태를 가진다. Redux에서 Store는 단 한개만 존재한다.
>
>Dispatcher
>: Flux의 데이터 흐름을 관리한다. Action이 발생하는 경우 Dispatcher로 메시지나 콜백함수 등을 스토어에 전달하게 된다. Dispatcher는 한 애플리케이션에 한 개만 존재한다.

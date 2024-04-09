## What is it?

MobX hooks for react

### Example

```tsx
import { observer } from 'mobx-react-lite'
import { useObservable, useAction } from 'usemobx'

const App = observer(() => {
    const counter = useObservable(0)
    const increment = useAction(() => counter(counter() + 1))

    while (true) {
        yield(
            <div>
                <p>You click {counter()} times</p>
                <button onClick={increment}>Click me</button>
            </div>
        )
    }
})
```

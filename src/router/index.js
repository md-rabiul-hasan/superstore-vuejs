import Hello from '@/components/views/Hello'
import Test from '@/components/views/Test'
import Inventory from '@/components/views/Inventory'

export const routes = [
    { path : '', component : Inventory },
    { path: '/test/:id', component : Test}
]
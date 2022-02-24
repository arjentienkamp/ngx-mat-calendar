import { Pipe } from '@angular/core';
export class LimitPipe {
    transform(items, limit) {
        return items.slice(0, limit);
    }
}
LimitPipe.decorators = [
    { type: Pipe, args: [{
                name: 'limitPipe'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGltaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1tYXQtY2FsZW5kYXIvc3JjL2xpYi9waXBlcy9saW1pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxTQUFTO0lBQ2xCLFNBQVMsQ0FBQyxLQUFZLEVBQUUsS0FBYTtRQUNqQyxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7OztZQU5KLElBQUksU0FBQztnQkFDRixJQUFJLEVBQUUsV0FBVzthQUNwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICAgIG5hbWU6ICdsaW1pdFBpcGUnXG59KVxuZXhwb3J0IGNsYXNzIExpbWl0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICAgIHRyYW5zZm9ybShpdGVtczogYW55W10sIGxpbWl0OiBudW1iZXIpOiBhbnkge1xuICAgICAgICByZXR1cm4gaXRlbXMuc2xpY2UoMCwgbGltaXQpO1xuICAgIH1cbn1cbiJdfQ==
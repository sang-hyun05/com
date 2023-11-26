document.addEventListener('DOMContentLoaded', function () {
    // 각 contentbox 요소를 가져옵니다.
    const contentBoxes = document.querySelectorAll('.contentbox');
    // 합계를 나타낼 total 요소를 가져옵니다.
    const total = document.querySelector('#total');

    // 총 가격을 저장할 변수를 초기화합니다.
    let totalPrice = 0;

    // 각 contentbox에 대해 작업을 수행합니다.
    contentBoxes.forEach(function (contentBox) {
        // 각 contentbox에서 필요한 요소들을 가져옵니다.
        const num = contentBox.querySelector('.box1'); // 수량을 표시하는 요소
        const checkboxes = contentBox.querySelectorAll('.checkboxs'); // 체크박스들
        const prisesElement = contentBox.querySelector('.prises'); // 제품 가격을 표시하는 요소
        const plusButton = contentBox.querySelector('.plus'); // 더하기 버튼
        const minusButton = contentBox.querySelector('.minus'); // 빼기 버튼

        // 더하기 버튼에 대한 이벤트 리스너를 추가합니다.
        plusButton.addEventListener('click', () => {
            // 체크된 체크박스가 없을 때 수량을 증가시킵니다.
            if (!isAnyCheckboxChecked(checkboxes)) {
                num.innerText = parseInt(num.innerText) + 1;
                updatePrices();
            }
        });

        // 빼기 버튼에 대한 이벤트 리스너를 추가합니다.
        minusButton.addEventListener('click', () => {
            // 체크된 체크박스가 없고 수량이 1 이상일 때 수량을 감소시킵니다.
            const currentCount = parseInt(num.innerText);
            if (!isAnyCheckboxChecked(checkboxes) && currentCount > 1) {
                num.innerText = currentCount - 1;
                updatePrices();
            }
        });

        // 각 체크박스에 대해 change 이벤트 리스너를 추가합니다.
        checkboxes.forEach(function (checkbox) {
            checkbox.addEventListener('change', () => {
                // 체크박스의 체크 상태에 따라 가격을 업데이트하고 합계를 갱신합니다.
                if (checkbox.checked) {
                    totalPrice += calculateProductPrice(num, prisesElement);
                } else {
                    totalPrice -= calculateProductPrice(num, prisesElement);
                }
                updateTotal();
            });
        });

        // 제품 가격을 업데이트하는 함수입니다.
        function updatePrices() {
            prisesElement.innerText = calculateProductPrice(num, prisesElement) + '원';
            updateTotal();
        }
    });

    // 제품 가격을 계산하는 함수입니다.
    function calculateProductPrice(num, prisesElement) {
        const quantity = parseInt(num.innerText);
        const unitPrice = parseInt(prisesElement.getAttribute('data-unit-price'));
        return unitPrice * quantity;
    }

    // 합계를 업데이트하는 함수입니다.
    function updateTotal() {
        total.value = totalPrice + '원';
    }

    // 체크박스 중 하나라도 체크되었는지 확인하는 함수입니다.
    function isAnyCheckboxChecked(checkboxes) {
        return Array.from(checkboxes).some(checkbox => checkbox.checked);
    }
});
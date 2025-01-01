fn calculate_main_return_value() -> i32 {
    2
}

fn main() {
    let result = calculate_main_return_value();
    println!("Result: {}", result);
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_main_returns_two() {
        let result = calculate_main_return_value();
        assert_eq!(result, 5);
    }
}

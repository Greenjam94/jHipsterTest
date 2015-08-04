package local.demo.test.repository;

import local.demo.test.domain.Foo;
import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Foo entity.
 */
public interface FooRepository extends JpaRepository<Foo,Long> {

}

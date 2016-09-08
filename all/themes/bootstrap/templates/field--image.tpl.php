<?php foreach ($items as $delta => $item): ?>
  <figure class="field-item <?php print $delta % 2 ? 'odd' : 'even'; ?>"<?php print $item_attributes[$delta]; ?>><?php print render($item); ?><figcaption><?php print render($content['field_caption']); ?>whoknew?</figcaption></figure>
<?php endforeach; ?>
